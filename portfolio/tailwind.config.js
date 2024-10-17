tailwind.config = {
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px,1fr))",
      },
      animation: {
        spin_slow: "spin 6s linear infinite",
      },
      colors: {
        darkTheme: "#11001F",
        darkWhite: "white",
      },
    },
  },
  darkMode: "selector",
};
