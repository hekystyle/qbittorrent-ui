import { Row, Col, Descriptions } from 'antd';
import { isNil } from 'rambda';
import { FormattedMessage, FormattedNumber, FormattedTime } from 'react-intl';
import { FormattedBytes } from './FormattedBytes';
import { Infinite } from './Infinite';

export interface TransferValues {
  timeActive: {
    total: number;
    seeded: number;
  };
  downloaded: {
    total: number;
    session: number;
  };
  download: {
    speed: {
      current: number;
      average: number;
    };
    limit: number;
  };
  shareRatio: number;
}

export interface TransferProps {
  values?: TransferValues | undefined;
}

export function Transfer({ values }: TransferProps) {
  const { download, downloaded, timeActive, shareRatio } = values ?? {};

  return (
    <Row>
      <Col>
        <Descriptions
          items={[
            {
              label: <FormattedMessage id="transfer.timeActive" />,
              children: isNil(timeActive) ? (
                ''
              ) : (
                <>
                  <FormattedTime value={timeActive.total} /> (
                  <FormattedMessage id="transfer.seededFor" />{' '}
                  <FormattedTime value={timeActive.seeded} />)
                </>
              ),
            },
            {
              label: <FormattedMessage id="transfer.downloaded" />,
              children: isNil(downloaded) ? (
                ''
              ) : (
                <>
                  <FormattedBytes value={downloaded.total} /> (
                  <FormattedBytes value={downloaded.total} />{' '}
                  <FormattedMessage id="transfer.thisSession" />)
                </>
              ),
            },
            {
              label: <FormattedMessage id="transfer.downloadSpeed" />,
              children: isNil(download) ? (
                ''
              ) : (
                <>
                  <FormattedBytes value={download.speed.current} perUnit="s" />{' '}
                  (
                  <FormattedBytes value={download.speed.average} perUnit="s" />
                  <FormattedMessage id="transfer.averageAbbreviation" />
                  .)
                </>
              ),
            },
            {
              label: <FormattedMessage id="transfer.downloadLimit" />,
              children:
                download === undefined ? (
                  ''
                ) : download.limit === null ? (
                  <Infinite />
                ) : (
                  <FormattedBytes value={download.limit} />
                ),
            },
            {
              label: <FormattedMessage id="transfer.shareRatio" />,
              children: isNil(shareRatio) ? (
                ''
              ) : (
                <FormattedNumber value={shareRatio} />
              ),
            },
          ]}
        ></Descriptions>
      </Col>
      <Col></Col>
      <Col></Col>
    </Row>
  );
}

export default Transfer;
