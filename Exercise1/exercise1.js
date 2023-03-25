class MultimediaBaseContent {
  constructor(title, streamingPrice, downloadPrice) {
    this.title = title;
    this.streamingPrice = streamingPrice;
    this.downloadPrice = downloadPrice;
  }
}

class PremiumContent extends MultimediaBaseContent {
  constructor(title, streamingPrice, downloadPrice, additionalFee) {
    super(title, streamingPrice, downloadPrice);
    this.additionalFee = additionalFee;
  }
}

class Service {
  constructor(multimediaContent) {
    this.time = new Date();
    this.multimediaContent = multimediaContent;
  }

  getMultimediaContent() {
    return this.multimediaContent;
  }
}

class StreamingService extends Service {
  constructor(multimediaContent) {
    super(multimediaContent);
  }

  getPrice() {
    return this.multimediaContent.streamingPrice;
  }
}

class DownloadService extends Service {
  constructor(multimediaContent) {
    super(multimediaContent);
  }

  getPrice() {
    return this.multimediaContent.downloadPrice;
  }
}

class User {
  constructor(services = []) {
    this.services = services;
  }

  getTotal() {
    let total = 0;

    this.services.forEach((service) => {
      total += service.getPrice();

      if (service.getMultimediaContent() instanceof PremiumContent) {
        total += service.getMultimediaContent().additionalFee;
      }
    });

    return total;
  }
}
const movie = new MultimediaBaseContent('The Dark Knight', 12.99, 9.99);
const song = new MultimediaBaseContent('Bohemian Rhapsody', 1.29, 0.99);
const concert = new PremiumContent(
  'Live at Wembley Stadium',
  24.99,
  19.99,
  5.0
);

const streamingService1 = new StreamingService(movie);
const streamingService2 = new StreamingService(song);
const downloadService1 = new DownloadService(song);
const downloadService2 = new DownloadService(concert);

const user = new User([
  streamingService1,
  streamingService2,
  downloadService1,
  downloadService2,
]);

const totalCost = user.getTotal();

console.log(totalCost);
