import { AppProvider } from './providers/app';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <div data-test="app">
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </div>
  );
}

export default App;
