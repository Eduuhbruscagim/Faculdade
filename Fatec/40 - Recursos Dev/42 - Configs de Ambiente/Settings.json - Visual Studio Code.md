{

  // ==========================================================================

  // --- TERMINAL INTEGRADO (SEÇÃO DEDICADA) ---

  // ==========================================================================

  

  "terminal.integrated.defaultProfile.windows": "PowerShell",

  "terminal.integrated.profiles.windows": {

    "PowerShell": {

      "path": "C:\\Program Files\\PowerShell\\7\\pwsh.exe",

    },

    "Command Prompt": {

      "path": ["${env:windir}\\Sysnative\\cmd.exe", "${env:windir}\\System32\\cmd.exe"],

      "args": [],

      "icon": "terminal-cmd",

    },

    "Git Bash": {

      "source": "Git Bash",

      "icon": "terminal-git-bash",

      "path": "C:\\Program Files\\Git\\bin\\bash.exe",

      "args": ["--login", "-i"],

    },

  },

  

  // Fonte preparada para o Oh My Posh

  "terminal.integrated.fontFamily": "'JetBrainsMono Nerd Font'",

  "terminal.integrated.minimumContrastRatio": 1,

  "terminal.integrated.fontSize": 13,

  "terminal.integrated.fontWeight": "normal",

  "terminal.integrated.lineHeight": 1.2,

  "terminal.integrated.cursorStyle": "line",

  "terminal.integrated.cursorBlinking": true,

  "terminal.integrated.smoothScrolling": true,

  "terminal.integrated.gpuAcceleration": "on",

  "terminal.integrated.tabs.enabled": true,

  "terminal.integrated.tabs.location": "right",

  

  // ==========================================================================

  // --- ESTÉTICA & FLUIDEZ DO EDITOR ---

  // ==========================================================================

  

  "editor.cursorBlinking": "smooth",

  "editor.cursorSmoothCaretAnimation": "on",

  "editor.cursorWidth": 2,

  "editor.smoothScrolling": true,

  "workbench.list.smoothScrolling": true,

  "editor.minimap.enabled": false,

  "editor.stickyScroll.enabled": false,

  "editor.padding.top": 10,

  "editor.padding.bottom": 10,

  "editor.wordWrap": "off",

  "workbench.tree.indent": 20,

  

  // ==========================================================================

  // --- TIPOGRAFIA ---

  // ==========================================================================

  

  "editor.fontFamily": "'JetBrainsMono Nerd Font', Consolas, 'Courier New', monospace",

  "editor.fontLigatures": true,

  "editor.fontSize": 14,

  "editor.lineHeight": 24,

  "editor.letterSpacing": 0.2,

  "editor.fontWeight": "500",

  

  // ==========================================================================

  // --- WORKFLOW & FORMATAÇÃO (React, Java, C) ---

  // ==========================================================================

  

  "files.autoSave": "afterDelay",

  "files.autoSaveDelay": 1000,

  "editor.formatOnSave": true,

  "editor.formatOnPaste": true,

  "editor.defaultFormatter": "esbenp.prettier-vscode",

  "editor.codeActionsOnSave": {

    "source.fixAll.eslint": "always",

    "source.organizeImports": "explicit",

  },

  "eslint.format.enable": false,

  

  // Configurações do Prettier

  "prettier.printWidth": 100,

  "prettier.singleQuote": true,

  "prettier.semi": false,

  "prettier.trailingComma": "all",

  "prettier.tabWidth": 2,

  "prettier.useTabs": false,

  "prettier.bracketSpacing": true,

  "prettier.arrowParens": "always",

  "prettier.endOfLine": "lf",

  

  // ==========================================================================

  // --- LEITURA E GUIAS ---

  // ==========================================================================

  

  "editor.bracketPairColorization.enabled": true,

  "editor.guides.bracketPairs": true,

  "editor.guides.bracketPairsHorizontal": true,

  "editor.guides.highlightActiveIndentation": true,

  "editor.guides.indentation": true,

  "editor.renderLineHighlight": "gutter",

  "editor.renderWhitespace": "selection",

  "editor.matchBrackets": "always",

  

  // ==========================================================================

  // --- INTELLISENSE & SUGESTÕES ---

  // ==========================================================================

  

  "editor.suggestSelection": "first",

  "editor.acceptSuggestionOnCommitCharacter": false,

  "editor.tabCompletion": "on",

  "editor.inlineSuggest.enabled": true,

  "editor.snippetSuggestions": "bottom",

  "editor.parameterHints.enabled": true,

  "java.inlayHints.parameterNames.enabled": "all",

  

  // ==========================================================================

  // --- LIMPEZA VISUAL & ARQUIVOS ---

  // ==========================================================================

  

  "breadcrumbs.enabled": false,

  "workbench.navigationControl.enabled": false,

  "workbench.tips.enabled": false,

  "workbench.iconTheme": "symbols",

  "explorer.confirmDelete": false,

  "files.associations": {

    "*.css": "tailwindcss",

  },

  "files.exclude": {

    "**/.git": true,

    "**/node_modules": true,

    "**/dist": true,

    "**/build": true,

    "**/.next": true,

  },

  "search.exclude": {

    "**/node_modules": true,

    "**/dist": true,

    "**/build": true,

  },

  

  // ==========================================================================

  // --- PERFORMANCE & SISTEMA ---

  // ==========================================================================

  

  "telemetry.telemetryLevel": "off",

  "java.jdt.ls.vmargs": "-Xmx1G -XX:+UseG1GC -XX:+UseStringDeduplication",

  "docker.truncateLongOutput": true,

  "extensions.ignoreRecommendations": true,

  

  // Especializações por linguagem

  "[html]": {

    "editor.defaultFormatter": "esbenp.prettier-vscode",

  },

  "[java]": {

    "editor.defaultFormatter": "redhat.java",

  },

  "[javascript]": {

    "editor.defaultFormatter": "esbenp.prettier-vscode",

  },

  "[javascriptreact]": {

    "editor.defaultFormatter": "esbenp.prettier-vscode",

  },

  "[typescript]": {

    "editor.defaultFormatter": "esbenp.prettier-vscode",

  },

  "[typescriptreact]": {

    "editor.defaultFormatter": "esbenp.prettier-vscode",

  },

  "[json]": {

    "editor.defaultFormatter": "esbenp.prettier-vscode",

  },

  "[jsonc]": {

    "editor.defaultFormatter": "esbenp.prettier-vscode",

  },

  "[css]": {

    "editor.defaultFormatter": "esbenp.prettier-vscode",

  },

  "[scss]": {

    "editor.defaultFormatter": "esbenp.prettier-vscode",

  },

  "terminal.integrated.initialHint": false,

  "workbench.editor.empty.hint": "hidden",

  "glassit.alpha": 255,

  "workbench.productIconTheme": "fluent-icons",

  "chat.disableAIFeatures": true,

  "workbench.colorTheme": "VS Code Dark",

  "java.configuration.runtimes": [

    {

      "name": "JavaSE-25",

      "path": "C:\\Program Files\\Eclipse Adoptium\\jdk-25.0.2.10-hotspot",

      "default": true,

    },

  ],

}