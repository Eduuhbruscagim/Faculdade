
## Tasks.json

---

{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "shell",
      "label": "COMPILAR C++",
      "command": "g++",
      "args": [
        "-g",
        "${file}",
        "-o",
        "${fileDirname}\\${fileBasenameNoExtension}.exe"
      ],
      "options": {
        "cwd": "${fileDirname}"
      },
      "problemMatcher": ["$gcc"],
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "detail": "Compilador G++ via Scoop"
    }
  ]
}





## Launch.json

---
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "RODAR C++ (FATEC)",
      "type": "cppdbg",
      "request": "launch",
      "program": "${fileDirname}\\${fileBasenameNoExtension}.exe",
      "args": [],
      "stopAtEntry": false,
      "cwd": "${fileDirname}",
      "environment": [],
      "externalConsole": false,
      "MIMode": "gdb",
      "miDebuggerPath": "C:\\Users\\edugu\\scoop\\apps\\gdb\\17.1\\bin\\gdb.exe",
      "setupCommands": [
        {
          "description": "Enable pretty-printing for gdb",
          "text": "-enable-pretty-printing",
          "ignoreFailures": true
        }
      ],
      "preLaunchTask": "COMPILAR C++"
    }
  ]
}
