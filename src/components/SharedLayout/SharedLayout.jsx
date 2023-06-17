import Container from 'components/Container/Container';
import Navigation from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <>
      <Navigation />
      <Suspense
        fallback={
          <Container>
            <h2>Loading...</h2>
          </Container>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
}
