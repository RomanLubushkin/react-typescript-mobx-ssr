import * as React from 'react';
import styled from 'styled-components';

const jpg = require('../assets/nodejs-icon.jpg');
const png = require('../assets/nodejs-icon.png');
const svg = require('../assets/nodejs-icon.svg');

export interface ImagesComponentProps {
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImageItem = styled.div`
  max-width: 200px;
`;

const Image = styled.img`
  max-width: 100%;
`;

const ImageCaption = styled.div`
  text-align: center;
`;

const ImagesComponent: React.SFC<ImagesComponentProps> = function (props: ImagesComponentProps) {
    return (
        <Wrapper>
            <ImageItem>
                <Image src={jpg} alt="NodeJS icon JPG"/>
                <ImageCaption>NodeJS icon JPG</ImageCaption>
            </ImageItem>
            <ImageItem>
                <Image src={png} alt="NodeJS icon PNG"/>
                <ImageCaption>NodeJS icon PNG</ImageCaption>
            </ImageItem>
            <ImageItem>
                <Image src={svg} alt="NodeJS icon SVG"/>
                <ImageCaption>NodeJS icon SVG</ImageCaption>
            </ImageItem>
        </Wrapper>
    );
};

ImagesComponent.defaultProps = {};

export default ImagesComponent;