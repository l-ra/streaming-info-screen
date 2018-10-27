import { connect } from 'react-redux'
import { showAgenda, hideAgenda, nextQuickNews } from './actions'
import Footer from './Footer'

const mapStateToProps = state => {
    let subtitle=""
    let news = ""
    if ( state.agenda.currentItem >= 0 ){
        subtitle=state.agenda.items[state.agenda.currentItem]
    }
    if (state.quickNews.index>=0){
        news=state.quickNews.news[state.quickNews.index]
    }
    return {
        title: state.agenda.title,
        subtitle: subtitle,
        news: news,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowAgenda: ()=>{
            //console.log("show agenda")
            dispatch(showAgenda())
        },
        onHideAgenda: ()=>{
            //console.log("hide agenda")
            dispatch(hideAgenda())
        },
        onNextNews: ()=>{
            //console.log("on next news")
            dispatch(nextQuickNews())
        }
    }
}

const FooterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer)

export default FooterContainer