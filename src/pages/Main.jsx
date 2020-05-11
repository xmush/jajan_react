import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeadSection from '../components/mainPageComponen/HeadSection'
import {getCategory} from '../redux/actions/globalAction'
import { connect } from 'react-redux'

class Main extends React.Component {

    componentDidMount() {
        this.props.getCategory()
    }

    render() {
        return(
            <React.Fragment>
                <Header 
                dataCategory = {this.props.category}
                />
                <HeadSection />
                <Footer />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        category : state.global.category
    }
}

const mapDispatchToProps = {
    getCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);