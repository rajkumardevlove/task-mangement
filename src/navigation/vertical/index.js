// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import AddAlarm from 'mdi-material-ui/ViewDashboard'
import FormatLetterCase from 'mdi-material-ui/BagPersonal'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/Update'
import FORUM from 'mdi-material-ui/Forum'
import CHAT from 'mdi-material-ui/Chat'
import GPT from 'mdi-material-ui/Assistant'
import MAIL from 'mdi-material-ui/EmailAlert'
import TIME from 'mdi-material-ui/FileExcel'
import MEET from 'mdi-material-ui/Crowd'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/TimelineClock'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: AddAlarm,
      path: '/'
    },
    {
      title: 'My Page',
      icon: FormatLetterCase,
      path: '/my-page'
    },
    {
      title: 'Log Hours',
      path: '/log-hours',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Apply Leave/WFH',
      icon: CreditCardOutline,
      path: '/apply-leave'
    },
    {
      sectionTitle: 'Infoview Tools'
    },
    {
      title: 'IV-Forum',
      icon: FORUM,
      path: '/iv-forum'
    },
    {
      title: 'IV-GPT',
      icon: GPT,
      path: '/chatbox'
    },
    {
      title: 'IV-Mail',
      icon: MAIL,
      path: '/iv-mail'
    },
    {
      title: 'IV-TimeSheet',
      icon: TIME,
      path: '/iv-time-sheet'
    },
    {
      title: 'IV-Meet',
      icon: MEET,
      path: '/iv-meet'
    },
    {
      sectionTitle: 'User Operations'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
  ]
}

export default navigation
