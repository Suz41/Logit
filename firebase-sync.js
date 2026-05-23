/* ========= FIREBASE SYNC FOR LOGIT ========= */
/* Shared module loaded by both index.html and PS.html */

var LogitSync = (function() {
  'use strict';

  var db = null;
  var auth = null;
  var uid = null;
  var ready = false;
  var statusListeners = [];
  var CONFIG_KEY = 'firebase_config';

  function getConfig() {
    try {
      var raw = localStorage.getItem(CONFIG_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch(e) {
      return null;
    }
  }

  function saveConfig(config) {
    localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
  }

  function clearConfig() {
    localStorage.removeItem(CONFIG_KEY);
  }

  function isConfigured() {
    return !!getConfig();
  }

  function notifyStatus() {
    var s = getStatus();
    for (var i = 0; i < statusListeners.length; i++) {
      try { statusListeners[i](s); } catch(e) {}
    }
  }

  function onStatusChange(fn) {
    statusListeners.push(fn);
  }

  function getStatus() {
    if (!isConfigured()) return 'not_configured';
    if (!ready) return 'connecting';
    if (!uid) return 'auth_error';
    return 'connected';
  }

  function getUid() {
    return uid;
  }

  function init(config) {
    if (config) saveConfig(config);
    var cfg = config || getConfig();
    if (!cfg || !cfg.apiKey || !cfg.databaseURL) return Promise.resolve(false);

    try {
      /* global firebase */
      if (!firebase.apps.length) {
        firebase.initializeApp(cfg);
      }
      db = firebase.database();
      auth = firebase.auth();

      return auth.signInAnonymously().then(function(result) {
        uid = result.user.uid;
        ready = true;
        notifyStatus();
        return true;
      }).catch(function(err) {
        console.error('[LogitSync] Auth error:', err);
        ready = false;
        notifyStatus();
        return false;
      });
    } catch(err) {
      console.error('[LogitSync] Init error:', err);
      notifyStatus();
      return Promise.resolve(false);
    }
  }

  function userRef() {
    if (!db || !uid) return null;
    return db.ref('users/' + uid + '/movies');
  }

  function push(movies) {
    if (!ready) return Promise.resolve(false);
    var ref = userRef();
    if (!ref) return Promise.resolve(false);

    return ref.set({
      data: movies,
      ts: firebase.database.ServerValue.TIMESTAMP
    }).then(function() {
      return true;
    }).catch(function(err) {
      console.error('[LogitSync] Push error:', err);
      return false;
    });
  }

  function pull() {
    if (!ready) return Promise.resolve(null);
    var ref = userRef();
    if (!ref) return Promise.resolve(null);

    return ref.once('value').then(function(snap) {
      var val = snap.val();
      if (val && val.data && Array.isArray(val.data)) {
        return val.data;
      }
      return null;
    }).catch(function(err) {
      console.error('[LogitSync] Pull error:', err);
      return null;
    });
  }

  function merge(localMovies, remoteMovies) {
    if (!remoteMovies || remoteMovies.length === 0) return localMovies;
    if (!localMovies || localMovies.length === 0) return remoteMovies;

    var seen = {};
    var merged = [];

    /* Local first (priority) */
    for (var i = 0; i < localMovies.length; i++) {
      var m = localMovies[i];
      if (m.id && !seen[m.id]) {
        seen[m.id] = true;
        merged.push(m);
      }
    }

    /* Remote: add anything not already in local */
    for (var j = 0; j < remoteMovies.length; j++) {
      var r = remoteMovies[j];
      if (r.id && !seen[r.id]) {
        seen[r.id] = true;
        merged.push(r);
      }
    }

    return merged;
  }

  return {
    init: init,
    push: push,
    pull: pull,
    merge: merge,
    isConfigured: isConfigured,
    getUid: getUid,
    getStatus: getStatus,
    onStatusChange: onStatusChange,
    saveConfig: saveConfig,
    clearConfig: clearConfig,
    getConfig: getConfig
  };
})();
