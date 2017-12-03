package com.tns.gen.android.media;

public class MediaPlayer_OnSeekCompleteListener implements android.media.MediaPlayer.OnSeekCompleteListener {
	public MediaPlayer_OnSeekCompleteListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onSeekComplete(android.media.MediaPlayer param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onSeekComplete", void.class, args);
	}

}
