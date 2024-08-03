// Error handler middleware
function errorHandler(err, req, res, next) {
    // Hatanın durum kodunu belirleme (varsayılan 500)
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  
    // Hatanın detaylarını al
    const errorDetails = {
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    };
  
    // Hata mesajını ve kodunu loglama
    console.error(err);
  
    // İstemciye hata yanıtı gönderme
    res.status(statusCode).json({
      error: {
        message: errorDetails.message,
        stack: errorDetails.stack,
      },
    });
  }
  
  module.exports = errorHandler;
  