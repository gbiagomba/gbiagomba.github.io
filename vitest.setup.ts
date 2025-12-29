import '@testing-library/jest-dom';

class IntersectionObserverMock {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
  // @ts-expect-error - providing test polyfill
  window.IntersectionObserver = IntersectionObserverMock;
}

