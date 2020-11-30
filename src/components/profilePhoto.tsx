import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

type Props = {
    size: number;
};
const ProfilePhoto: React.FC<Props> = ({ size = 100 }) => {
    const data = useStaticQuery(graphql`
        query {
            avatar: file(
                sourceInstanceName: { eq: "images" }
                relativePath: { eq: "tolu.png" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
    `);
    return (
        <StyledProfilePhoto size={size}>
            <div className="wrapper">
                <Img
                    fluid={data.avatar.childImageSharp.fluid}
                    alt="Tolulope Adetula"
                    className="img"
                />
            </div>
        </StyledProfilePhoto>
    );
};

const StyledProfilePhoto = styled.div<Props>`
    .wrapper {
        display: block;
        position: relative;
        width: ${({ size }) => size}px;
        height: ${({ size }) => size}px;
        border-radius: ${({ size }) => size}px;
        border: 2px solid white;

        .img {
            width: 100%;
            height: 100%;
            position: relative;
            border-radius: ${({ size }) => size}px;
        }
    }
`;

export default ProfilePhoto;
