/**
 * Just tested with resolution width greather than 736px
 */

const btnFollowing = document.getElementsByClassName('-nal3')[2]
const btnFollowers = document.getElementsByClassName('-nal3')[1]

const scrollSizeBase = 20
const unfollowTime = 60000 // Each 5 seconds

function unfollow(idx) {
    unfollowId(idx)
    if (idx > 0) {
        setTimeout(_ => unfollow(idx - 1), unfollowTime)
    }
}

function unfollowId(id) {
    document.getElementsByClassName('PZuss')[0].getElementsByTagName('li')[id].getElementsByTagName('button')[0].click()
    setTimeout(_ => document.getElementsByClassName('mt3GC')[0].getElementsByTagName('button')[0].click(), 200)
}

function scrollDivToBottom(idx) {
    document.getElementsByClassName('isgrP')[0].scrollTop =
        document.getElementsByClassName('isgrP')[0].scrollHeight
    if (idx > 0) {
        setTimeout(_ => scrollDivToBottom(idx - 1), 500)
    } else {
        // Call unfollow after scroll to end
        let followSize = document.getElementsByClassName('PZuss')[0].getElementsByTagName('li').length - 1
        unfollow(followSize)
    }
}

btnFollowing.click();
// SetTimeout because fade event after click
setTimeout(_ => scrollDivToBottom(scrollSizeBase), 1000)
