import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BaseBox } from "../shared";

const SBottomBox = styled(BaseBox)`
    padding: 0px 0px 10px 0px;
    text-align: center;
    a {
        font-weight: 600;
        margin-left: 10px;
        color: rgb(61, 141, 171);
    }
    a:hover {
        color: rgb(216, 89, 65);
        }
    
`;

function BottomBox({ cta ,link, linkText }) {
    return (
        <SBottomBox>
            <span>{cta}</span>
            <Link to={link}>{linkText}</Link>
        </SBottomBox>
    )
}

BottomBox.propTypes = {
    cta: PropTypes.string,
    link: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
  };

export default BottomBox;