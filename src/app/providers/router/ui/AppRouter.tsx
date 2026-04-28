import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Loader } from 'shared/ui/Loader';

export const AppRouter = () => (
    <Suspense fallback={<Loader />}>
        <Routes>
            {Object.values(routeConfig).map(({ path, element }) => (
                <Route
                    key={`path-${path}`}
                    path={path}
                    element={(
                        <Suspense fallback={<Loader />}>
                            <div className="page-wrapper">
                                {element}
                            </div>
                        </Suspense>
                    )}
                />
            ))}

        </Routes>
    </Suspense>
);
