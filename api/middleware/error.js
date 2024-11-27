export const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging (use a logger in production)
    const statusCode = err.statusCode || 500; // Default to 500 Internal Server Error
    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error",
        stack: process.env.NODE_ENV === "production" ? null : err.stack, // Only show stack in non-production environments
    });
};