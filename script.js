<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Download Files</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f8f9fa;
            margin: 0;
            padding: 0;
        }
        .header {
            background-color: #007bff;
            color: white;
            padding: 10px;
            text-align: center;
        }
        .container {
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        .file-item {
            background-color: white;
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .file-item a {
            color: #007bff;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s;
        }
        .file-item a:hover {
            color: #0056b3;
        }
        @media (max-width: 600px) {
            .file-item {
                flex-direction: column;
                text-align: center;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>File Downloads</h1>
    </div>
    <div class="container">
        <div class="file-item">
            <span>File 1 (ZIP)</span>
            <a href="files/file1.zip" download>Download</a>
        </div>
        <div class="file-item">
            <span>File 2 (PDF)</span>
            <a href="files/file2.pdf" download>Download</a>
        </div>
        <div class="file-item">
            <span>File 3 (DOCX)</span>
            <a href="files/file3.docx" download>Download</a>
        </div>
    </div>
</body>
</html>
