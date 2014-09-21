// This is the Debian specific preferences file for Iceweasel
// You can make any change in here, it is the purpose of this file.
// You can, with this file and all files present in the
// /etc/iceweasel/pref directory, override any preference that is
// present in /usr/lib/iceweasel/defaults/preferences directory.
// While your changes will be kept on upgrade if you modify files in
// /etc/iceweasel/pref, please note that they won't be kept if you
// do make your changes in /usr/lib/iceweasel/defaults/preferences.
//
// Note that lockPref is allowed in these preferences files if you
// don't want users to be able to override some preferences.

lockPref("extensions.update.enabled", false);

// Use LANG environment variable to choose locale
lockPref("intl.locale.matchOS", true);

// Disable default browser checking.
lockPref("browser.shell.checkDefaultBrowser", false);

// Custom Netpoint

// Start Address
// lockPref("browser.startup.homepage","http://github.com/eqsoft/netpoint/");
// Don't hide url bar
lockPref("browser.fullscreen.autohide",false);
// Always start in private Modus
lockPref("browser.privatebrowsing.autostart",true);
// Disable Health Report
lockPref("datareporting.healthreport.service.enabled",true);

lockPref("app.update.enabled", false);
lockPref("app.update.lastUpdateTime.addon-background-update-timer", 1238676637);
lockPref("app.update.lastUpdateTime.background-update-timer", 1238676637);
lockPref("app.update.lastUpdateTime.blocklist-background-update-timer", 1238676637);
lockPref("app.update.lastUpdateTime.microsummary-generator-update-timer", 1238676637);
lockPref("app.update.lastUpdateTime.search-engine-update-timer", 1238676638);
lockPref("browser.cache.disk.capacity", 10000);
lockPref("browser.download.manager.closeWhenDone", true);
lockPref("browser.download.manager.retention", 0);
lockPref("browser.formfill.enable", false);
lockPref("browser.history_expire_days", 0);
lockPref("browser.history_expire_days.mirror", 180);
lockPref("browser.migration.version", 1);
lockPref("browser.places.importBookmarksHTML", false);
lockPref("browser.places.importDefaults", false);
lockPref("browser.places.leftPaneFolderId", -1);
lockPref("browser.places.migratePostDataAnnotations", false);
lockPref("browser.places.smartBookmarksVersion", 1);
lockPref("browser.places.updateRecentTagsUri", false);
lockPref("browser.preferences.advanced.selectedTabIndex", 0);
lockPref("browser.search.update", false);
lockPref("browser.startup.homepage", "http://ipxe.org/");
lockPref("browser.startup.homepage_override.mstone", "rv:1.9.0.14");
//lockPref("extensions.enabledItems", "langpack-de@firefox.mozilla.org:3.0.6,{972ce4c6-7e08-4474-a285-3208198ce6fd}:3.0.6");
//lockPref("extensions.lastAppVersion", "3.0.6");
lockPref("extensions.update.enabled", false);
lockPref("extensions.update.notifyUser", false);
lockPref("intl.charsetmenu.browser.cache", "ISO-8859-1, UTF-8");
lockPref("network.cookie.lifetimePolicy", 2);
lockPref("network.cookie.prefsMigrated", true);
lockPref("privacy.item.cookies", true);
lockPref("privacy.item.offlineApps", true);
lockPref("privacy.item.passwords", true);
lockPref("privacy.sanitize.promptOnSanitize", false);
lockPref("privacy.sanitize.sanitizeOnShutdown", true);
lockPref("security.disable_button.openCertManager", false);
lockPref("signon.rememberSignons", false);
lockPref("urlclassifier.keyupdatetime.https://sb-ssl.google.com/safebrowsing/newkey", 1241268640);
