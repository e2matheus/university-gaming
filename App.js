import React from 'react';

import UniversityDetails from './src/components/UniversityDetails/UniversityDetails';

const App = () => {
  const title = "Sevilla University";

  return (
        <UniversityDetails
          title={title}
          name={title}
          country="Spain"
          aboutGaming="Unreal 5 Course"
        />
  );
};

export default App;
