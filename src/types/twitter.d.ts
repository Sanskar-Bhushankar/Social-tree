interface TwitterWidgets {
  widgets: {
    load: () => Promise<void>;
  };
}

interface Window {
  twttr: TwitterWidgets;
}
