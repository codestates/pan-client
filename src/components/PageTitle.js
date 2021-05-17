import { Helmet } from "react-helmet-async"
import { PropTypes } from "prop-types";

function PageTitle({ title }) {
    return (
        <Helmet>
            <title>{title} | Pic, a note</title>
        </Helmet>
    )
}

PageTitle.propTypes = {
    title: PropTypes.string.isRequired,
}

export default PageTitle;