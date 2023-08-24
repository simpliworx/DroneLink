// Required modules
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const cliProgress = require('cli-progress');

// Static instances
const ui = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const progress = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

// Functions
function copyAndOrganizeFiles(sourceDirectory, destinationDirectory, callback) {
    if (!fs.existsSync(destinationDirectory)) {
        fs.mkdirSync(destinationDirectory, { recursive: true });
    }

    const files = fs.readdirSync(sourceDirectory);

    files.forEach(file => {
        const filePath = path.join(sourceDirectory, file);
        const stats = fs.statSync(filePath);

        if (stats.isFile()) {
            const extension = path.extname(file);
            const destinationSubfolder = path.join(destinationDirectory, extension.slice(1));

            if (!fs.existsSync(destinationSubfolder)) {
                fs.mkdirSync(destinationSubfolder);
            }

            const destinationPath = path.join(destinationSubfolder, file);
            fs.copyFileSync(filePath, destinationPath);
        }
        progress.increment();
    });

    callback();
}

function removeOldFiles(directoryPath) {
    if (!fs.existsSync(directoryPath)) {
        console.log('Directory does not exist.');
        return;
    }

    try {
        const files = fs.readdirSync(directoryPath);

        files.forEach(file => {
            const filePath = path.join(directoryPath, file);
            if (fs.statSync(filePath).isFile()) {
                fs.unlinkSync(filePath);
            } else {
                deleteDirectory(filePath);
            }
        });

        fs.rmdirSync(directoryPath);
        console.log("Source files cleared!");
    } catch (err) {
        console.error('Error deleting directory:', err);
    }
}

// Main Run
let sourceDirectory;
let destinationDirectory;

ui.question("Source Directory (D:\\DCIM\\100MEDIA): ", (answer1) => {
    sourceDirectory = answer1;
    if (sourceDirectory == "") // Default for blank
        sourceDirectory = "D:\\DCIM\\100MEDIA";
    ui.question('Destination Directory: ', (answer2) => {
        destinationDirectory = answer2;
        try {
            console.log("Please wait...");
            filecount = fs.readdirSync(sourceDirectory).length;
            progress.start(filecount, 0);
            copyAndOrganizeFiles(sourceDirectory, destinationDirectory, () => {
                progress.stop();
                try{
                    removeOldFiles(sourceDirectory);
                } catch(E){
                    console.error("Could not remove source files")
                }
                
                ui.close();
            });
        } catch (e) {
            console.error('ERROR: Unable to download drone');
            ui.close();
        }
    });
});
