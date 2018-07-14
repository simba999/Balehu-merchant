package com.balehumerchant;

import android.app.Application;

import com.facebook.react.ReactApplication;
import li.yunqi.rnsecurestorage.RNSecureStoragePackage;
import com.reactlibrary.securekeystore.RNSecureKeyStorePackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import com.github.alinz.reactnativewebviewbridge.WebViewBridgePackage;
import org.reactnative.camera.RNCameraPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.horcrux.svg.SvgPackage;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNSecureStoragePackage(),
            new RNSecureKeyStorePackage(),
          new PickerPackage(),
          new WebViewBridgePackage(),
          new RNCameraPackage(),
          new MapsPackage(),
          new SvgPackage()

      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
