# Learning Cypress with Github Integration

Cypress Installation and project setup.

## 🔧 Requirements

- Python 3.8 or higher

## 📦 Installation & Usage

1. **1.Download node (official website)**


2. **Set node Home in Environmental variables:**


3. **Create Base Cypress working folder:**


4. **Download visual studio code editor**


5. **generate package.json**
    - type npm init on terminal
    - Input configuration variable on package.json file
    - Download Cypress Dependencies
      
6. **Download cypress dependencies**
    - 
    -
   ```bash
   yourfolder\npm install cypress --save-dev
   ```
   
   Start Cypress test runner
     ```bash
    yourfolder\npx cypress open
   ```

8. **Run Cypress Tests:**
   ```bash
    yourfolder\npx cypress open
   ```
     You can run your Cypress tests via the Test Runner or use the CLI command:
   ```bash
    npx cypress run
   ```

9. **Create first cypress test case**
   ```bash
    (\yourfolderproject\cypress\integration\examples)
   ```

## Instruction
   - A GUI window will appear.
   - Click the “Open .hiv/.dat File” button.
   - Select a valid NTUSER.DAT / .HIV file.
   - The tool will parse the registry and display information about connected USB devices in the table.
   - Some information about the application also will save into registry_reader.log


   ## 🖥️ Command-Line Interface (CLI) Usage

For automated processing and script integration, use the CLI version:

### Basic Command
```bash
python reg_reader.py --file <PATH_TO_HIV> [OPTIONS]
```

### Key Parameters
| Option              | Description                              | Default     |
|---------------------|------------------------------------------|-------------|
| `--file`, `-f`      | Path to registry hive file (.dat/.hiv)   | *Required*  |
| `--output`, `-o`    | Output filename (without extension)      | `results`   |
| `--format`          | Output format (`text`/`json`)            | `text`      |
| `--verbose`, `-v`   | Show detailed processing progress        | `False`     |

### Usage Examples
1. **Basic analysis**:
   ```bash
   python reg_reader.py -f NTUSER.DAT -o usb_analysis
   ```

2. **JSON output**:
   ```bash
   python reg_reader.py --file SYSTEM.HIV --format json
   ```

3. **Verbose mode**:
   ```bash
   python reg_reader.py -f USBSTOR.dat -v
   ```

### CLI Features
✅ Multi-format output  
✅ Batch processing  
✅ Device type filtering  
✅ Cross-platform  
✅ Detailed logging (`registry_reader.log`)

### Sample Outputs
**Text Format**:
```text
[USBSTOR] ControlSet001\Services\USBSTOR
• First Connected: 2025-05-18 11:30:45 UTC
• Last Activity: 2025-05-19 02:15:22 UTC
• VID/PID: 0781_5567
• Serial: 0000123456AB
```

**JSON Format**:
```json
{
  "device_id": "USB\\VID_0781&PID_5567\\0000123456AB",
  "first_connected": "2025-05-18T11:30:45Z",
  "last_activity": "2025-05-19T02:15:22Z"
}
```

### GUI vs CLI Comparison
| Feature          | GUI               | CLI                |
|------------------|-------------------|--------------------|
| Output           | Table + Log       | Text/JSON          |
| Automation       | Manual            | Script-friendly    |
| Best For         | Interactive Use   | Batch Jobs         |
| Resources        | Moderate          | Lightweight        |
