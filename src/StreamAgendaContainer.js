import { connect } from 'react-redux'
import { selectItem } from './actions'
import StreamAgenda from './StreamAgenda'

const mapStateToProps = state => {
    return {
        items: state.agenda.items,
        currentIndex: state.agenda.currentItem, 
        showAgenda: state.agenda.showAgenda
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onItemClick: (idx,text)=>{
            dispatch(selectItem(idx))
        }
    }
}

const StreamAgendaContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(StreamAgenda)

export default StreamAgendaContainer