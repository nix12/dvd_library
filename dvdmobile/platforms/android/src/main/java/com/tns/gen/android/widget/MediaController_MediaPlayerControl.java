package com.tns.gen.android.widget;

public class MediaController_MediaPlayerControl implements android.widget.MediaController.MediaPlayerControl {
	public MediaController_MediaPlayerControl() {
		com.tns.Runtime.initInstance(this);
	}

	public void start()  {
		java.lang.Object[] args = null;
		com.tns.Runtime.callJSMethod(this, "start", void.class, args);
	}

	public void pause()  {
		java.lang.Object[] args = null;
		com.tns.Runtime.callJSMethod(this, "pause", void.class, args);
	}

	public int getDuration()  {
		java.lang.Object[] args = null;
		return (int)com.tns.Runtime.callJSMethod(this, "getDuration", int.class, args);
	}

	public int getCurrentPosition()  {
		java.lang.Object[] args = null;
		return (int)com.tns.Runtime.callJSMethod(this, "getCurrentPosition", int.class, args);
	}

	public void seekTo(int param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "seekTo", void.class, args);
	}

	public boolean isPlaying()  {
		java.lang.Object[] args = null;
		return (boolean)com.tns.Runtime.callJSMethod(this, "isPlaying", boolean.class, args);
	}

	public int getBufferPercentage()  {
		java.lang.Object[] args = null;
		return (int)com.tns.Runtime.callJSMethod(this, "getBufferPercentage", int.class, args);
	}

	public boolean canPause()  {
		java.lang.Object[] args = null;
		return (boolean)com.tns.Runtime.callJSMethod(this, "canPause", boolean.class, args);
	}

	public boolean canSeekBackward()  {
		java.lang.Object[] args = null;
		return (boolean)com.tns.Runtime.callJSMethod(this, "canSeekBackward", boolean.class, args);
	}

	public boolean canSeekForward()  {
		java.lang.Object[] args = null;
		return (boolean)com.tns.Runtime.callJSMethod(this, "canSeekForward", boolean.class, args);
	}

	public int getAudioSessionId()  {
		java.lang.Object[] args = null;
		return (int)com.tns.Runtime.callJSMethod(this, "getAudioSessionId", int.class, args);
	}

}
