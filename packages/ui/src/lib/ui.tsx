import { FormattedMessage } from 'react-intl';
import { styled } from 'styled-components';

const StyledUi = styled.div`
  color: pink;
`;

export function Ui() {
  return (
    <StyledUi>
      <h1>
        <FormattedMessage id="ui.welcome" defaultMessage="Welcome to Ui!" />
      </h1>
    </StyledUi>
  );
}

export default Ui;
