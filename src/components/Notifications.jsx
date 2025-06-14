import NotificationIcon from '../svg/Notification'
import ArrowIcon from '../svg/Arrow'
import CloseIcon from '../svg/Close'

const Notifications = () => {
  return (
    <div className='h-[90px] dark:bg-dark_bg_3 flex items-center p-[30px]'>
        <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-x-4">
                <NotificationIcon className={"dark:fill-blue_1"}/>
                <div className="flex flex-col">
                    <span className='text-dark_text_1'>Get notified of new messages</span>
                    <span className='text-dark_text_2 mt-0.5 flex items-center gap-0.5'>
                        Trun on desktop notificaions 
                        <ArrowIcon className={"dark:fill-dark_svg_2 mt-1"}/>
                    </span>
                </div>
            </div>
            <div className='cursor-pointer'>
                <CloseIcon className={"dark:fill-dark_svg_2"}/>
            </div>
        </div>
    </div>
  )
}

export default Notifications