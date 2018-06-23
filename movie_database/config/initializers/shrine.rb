require "shrine"
require "shrine/storage/s3"
require "shrine/storage/tus"

s3_options = {
  access_key_id:     ENV["AWS_ACCESS_KEY_ID"],
  secret_access_key: ENV["AWS_SECRET_ACCESS_KEY"],
  region:            ENV["AWS_REGION"],
  bucket:            ENV["S3_BUCKET_NAME"],
}

Shrine.storages = {
  cache: Shrine::Storage::S3.new(prefix: "cache", **s3_options),
  store: Shrine::Storage::S3.new(**s3_options),
  tus:   Shrine::Storage::Tus.new
}

Shrine.plugin :activerecord
Shrine.plugin :backgrounding
Shrine.plugin :determine_mime_type

Shrine::Attacher.promote { |data| PromoteJob.perform_later(data) }
Shrine::Attacher.delete { |data| DeleteJob.perform_later(data) }