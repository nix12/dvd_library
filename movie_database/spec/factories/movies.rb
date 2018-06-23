FactoryBot.define do
  factory :movie do
		sequence(:title) { |n| "Test Movie #{ n }" }
		year 2018
    plot "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere mattis dolor,
          eget porta urna porta in. Sed laoreet nunc luctus sapien aliquam, tincidunt porttitor
          ante molestie. Sed consectetur lobortis feugiat. Nam ultricies ante lectus, non maximus
          lacus facilisis quis. Quisque congue lobortis gravida. Aliquam erat volutpat. Nulla sit
          amet justo sed est hendrerit dictum eu at metus. In vitae purus dictum risus dapibus
          cursus sit amet et ligula. Praesent imperdiet neque ac magna bibendum malesuada. Sed in
          massa non mauris accumsan consequat. Pellentesque sodales luctus arcu ac faucibus.
          Quisque pellentesque augue in placerat facilisis. Proin ornare massa et urna placerat
          aliquet eget in elit. Nunc a diam dolor."
		video {
      {
        id: "https://s3.us-east-2.amazonaws.com/dvd-library/cache/test/SampleVideo_720x480_1mb.mp4",
        storage: "cache",
        metadata: {
          filename: "video20180601-test.mp4",
          size: 1057149,
          mime_type: "video/mp4",
          title: :title,
          year: 2018,
          plot: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere mattis dolor,
          eget porta urna porta in. Sed laoreet nunc luctus sapien aliquam, tincidunt porttitor
          ante molestie. Sed consectetur lobortis feugiat. Nam ultricies ante lectus, non maximus
          lacus facilisis quis. Quisque congue lobortis gravida. Aliquam erat volutpat. Nulla sit
          amet justo sed est hendrerit dictum eu at metus. In vitae purus dictum risus dapibus
          cursus sit amet et ligula. Praesent imperdiet neque ac magna bibendum malesuada. Sed in
          massa non mauris accumsan consequat. Pellentesque sodales luctus arcu ac faucibus.
          Quisque pellentesque augue in placerat facilisis. Proin ornare massa et urna placerat
          aliquet eget in elit. Nunc a diam dolor."
        }
      }.to_json
    }
	end
end
