package com.tns.gen.android.media;

public class MediaPlayer_OnBufferingUpdateListener implements android.media.MediaPlayer.OnBufferingUpdateListener {
	public MediaPlayer_OnBufferingUpdateListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onBufferingUpdate(android.media.MediaPlayer param_0, int param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onBufferingUpdate", void.class, args);
	}

}
