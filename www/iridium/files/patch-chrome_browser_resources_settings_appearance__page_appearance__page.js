--- chrome/browser/resources/settings/appearance_page/appearance_page.js.orig	2019-03-11 22:00:54 UTC
+++ chrome/browser/resources/settings/appearance_page/appearance_page.js
@@ -120,7 +120,7 @@ Polymer({
     'defaultFontSizeChanged_(prefs.webkit.webprefs.default_font_size.value)',
     'themeChanged_(prefs.extensions.theme.id.value, useSystemTheme_)',
 
-    // <if expr="is_linux and not chromeos">
+    // <if expr="is_bsd and not chromeos">
     // NOTE: this pref only exists on Linux.
     'useSystemThemePrefChanged_(prefs.extensions.theme.use_system.value)',
     // </if>
@@ -223,7 +223,7 @@ Polymer({
     this.browserProxy_.useDefaultTheme();
   },
 
-  // <if expr="is_linux and not chromeos">
+  // <if expr="is_bsd and not chromeos">
   /**
    * @param {boolean} useSystemTheme
    * @private
@@ -292,10 +292,10 @@ Polymer({
     }
 
     let i18nId;
-    // <if expr="is_linux and not chromeos">
+    // <if expr="is_bsd and not chromeos">
     i18nId = useSystemTheme ? 'systemTheme' : 'classicTheme';
     // </if>
-    // <if expr="not is_linux or chromeos">
+    // <if expr="not is_bsd or chromeos">
     i18nId = 'chooseFromWebStore';
     // </if>
     this.themeSublabel_ = this.i18n(i18nId);
