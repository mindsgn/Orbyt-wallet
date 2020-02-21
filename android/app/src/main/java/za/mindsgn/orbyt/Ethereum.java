package za.mindsgn.orbyt;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.IllegalViewOperationException;
import android.database.sqlite.SQLiteOpenHelper;

public class Ethereum extends ReactContextBaseJavaModule {
  public Ethereum(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "Ethereum";
  }

  @ReactMethod
  public void Test(String message, Callback errorCallback, Callback successCallback) {
    try {
            //System.out.println("Greetings from Java");
            successCallback.invoke("Callback : " + message);
        } catch (IllegalViewOperationException e) {
            errorCallback.invoke(e.getMessage());
        }
  }
}
