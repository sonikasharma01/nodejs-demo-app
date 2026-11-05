const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

// Serve frontend files
app.use(express.static("public"));

// Health check API
app.get("/health", (req, res) => {
    res.json({
        status: "success",
        message: "Application is running!"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;