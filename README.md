# Drone Link

The Drone Link is a Node.js CLI script designed to copy and organize files from a drone to a destination directory based on their file extensions. It also provides the functionality to remove old files from the source directory after the copying process is complete.

## Features

- Download media from a DJI Drone and organize files by their file extensions into subdirectories in the destination folder.
- Remove old files from the drone after copying and organizing is complete.
- Provides a progress bar to track the copying process.
- Easy-to-use command-line interface for specifying source and destination directories.

## Prerequisites

- Node.js: Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

## Installation

1. Clone or download this repository to your local machine.
2. Open a terminal or command prompt and navigate to the script directory.

## Usage

1. Open a terminal or command prompt.
2. Navigate to the script directory using the `cd` command.
3. Run the script using the command:

   ```
   node index.js
   ```


4. The script will prompt you to provide the source directory and destination directory.
5. If no source directory is provided, the default directory "D:\\DCIM\\100MEDIA" will be used.
6. The copying and organizing process will start, and you'll see a progress bar indicating the progress.
7. Once the copying process is complete, the script will remove old files from the source directory.
8. The script will display a message indicating that the source files have been cleared.

## Customization

You can customize the behavior of the script by modifying the code in `index.js`. The script is well-commented, making it easy to understand the various functions and their purposes.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. More features would be awesome!

## License

This project is licensed under the [MIT License](LICENSE).