export class FeedImageSchema {
  constructor(
    asset_id,
    created_at,
    etag,
    format,
    height,
    width,
    public_id,
    url,
    access_mode,
  ) {
    this.asset_id = asset_id;
    this.created_at = created_at;
    this.etag = etag;
    this.format = format;
    this.height = height;
    this.width = width;
    this.public_id = public_id;
    this.url = url;
    this.access_mode = access_mode;
  }
}
