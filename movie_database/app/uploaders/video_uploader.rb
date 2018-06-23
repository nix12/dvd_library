class VideoUploader < TusUploader
  plugin :processing
  plugin :versions

  process(:store) do |data|
    mov = data.download
    video = Tempfile.new(["video", ".mp4"], binmode: true) 
    
    movie = FFMPEG::Movie.new(mov.path)
    options = { resolution: "640x480" }
    movie.transcode(video.path, options)
    
    mov.delete
    
    { video: video }
  end
end
