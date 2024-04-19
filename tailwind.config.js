/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"], // specifies where Tailwind should apply its utility classes
  theme: {
    "extend": {
      "colors": {
        "dark": {
          "50": "#C1C2C5",
          "100": "#A6A7AB",
          "200": "#909296",
          "300": "#5C5F66",
          "400": "#373A40",
          "500": "#2C2E33",
          "600": "#25262B",
          "700": "#1A1B1E",
          "800": "#141517",
          "900": "#101113",
          "DEFAULT": "#1A1B1E"
        },
        "info": {
          "50": "#eff6ff",
          "100": "#dbeafe",
          "200": "#bfdbfe",
          "300": "#93c5fd",
          "400": "#60a5fa",
          "500": "#3b82f6",
          "600": "#2563eb",
          "700": "#1d4ed8",
          "800": "#1e40af",
          "900": "#1e3a8a",
          "950": "#172554",
          "DEFAULT": "#60a5fa"
        },
        "black": "#000",
        "light": {
          "50": "#f9fafb",
          "100": "#f3f4f6",
          "200": "#e5e7eb",
          "300": "#d1d5db",
          "400": "#9ca3af",
          "500": "#6b7280",
          "600": "#4b5563",
          "700": "#374151",
          "800": "#1f2937",
          "900": "#111827",
          "950": "#030712",
          "DEFAULT": "#f3f4f6"
        },
        "muted": "#4a5d69",
        "slate": {
          "50": "#f8fafc",
          "100": "#f1f5f9",
          "200": "#e2e8f0",
          "300": "#cbd5e1",
          "400": "#94a3b8",
          "500": "#64748b",
          "600": "#475569",
          "700": "#334155",
          "800": "#1e293b",
          "900": "#0f172a",
          "950": "#020617"
        },
        "white": "#fff",
        "danger": {
          "50": "#fef2f2",
          "100": "#fee2e2",
          "200": "#fecaca",
          "300": "#fca5a5",
          "400": "#f87171",
          "500": "#ef4444",
          "600": "#dc2626",
          "700": "#b91c1c",
          "800": "#991b1b",
          "900": "#7f1d1d",
          "950": "#450a0a",
          "DEFAULT": "#dc2626"
        },
        "neutral": {
          "50": "#eff8ff",
          "100": "#dff1ff",
          "200": "#b7e4ff",
          "300": "#78cfff",
          "400": "#30b7ff",
          "500": "#059ef2",
          "600": "#007ecf",
          "700": "#0064a7",
          "800": "#02558a",
          "900": "#084672",
          "950": "#063255",
          "DEFAULT": "#007ecf"
        },
        "primary": {
          "50": "#fff9f3",
          "100": "#fef3e6",
          "200": "#fde2c1",
          "300": "#fbd09c",
          "400": "#f8ad51",
          "500": "#f7a139",
          "600": "#f58a07",
          "700": "#b86805",
          "800": "#935304",
          "900": "#784403",
          "950": "#623703",
          "DEFAULT": "#f58a07"
        },
        "success": {
          "50": "#ecfdf5",
          "100": "#d1fae5",
          "200": "#a7f3d0",
          "300": "#6ee7b7",
          "400": "#34d399",
          "500": "#10b981",
          "600": "#059669",
          "700": "#047857",
          "800": "#065f46",
          "900": "#064e3b",
          "950": "#022c22",
          "DEFAULT": "#10b981"
        },
        "warning": {
          "50": "#fffbeb",
          "100": "#fef3c7",
          "200": "#fde68a",
          "300": "#fcd34d",
          "400": "#fbbf24",
          "500": "#f59e0b",
          "600": "#d97706",
          "700": "#b45309",
          "800": "#92400e",
          "900": "#78350f",
          "950": "#451a03",
          "DEFAULT": "#f59e0b"
        },
        "tertiary": {
          "50": "#f6f7f8",
          "100": "#edeff0",
          "200": "#d2d7da",
          "300": "#b7bec3",
          "400": "#808e96",
          "500": "#6e7d87",
          "600": "#4a5d69",
          "700": "#38464f",
          "800": "#2c383f",
          "900": "#242e33",
          "950": "#1e252a",
          "DEFAULT": "#4a5d69"
        },
        "secondary": {
          "50": "#f3f5f7",
          "100": "#e6ebee",
          "200": "#c1ccd5",
          "300": "#9badbb",
          "400": "#517088",
          "500": "#385b77",
          "600": "#063255",
          "700": "#052640",
          "800": "#041e33",
          "900": "#03192a",
          "950": "#021422",
          "DEFAULT": "#063255"
        }
      },
      "spacing": {
        "112": "28rem",
        "128": "32rem",
        "144": "36rem",
        "160": "40rem",
        "192": "48rem"
      },
      "fontFamily": {
        "sans": "Poppins,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\""
      },
      "backgroundImage": {
        "arrow-down": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")",
        "caret-down": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='currentFill' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\");"
      },
      "screens": {}
    }
  },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms')
    ]
  }