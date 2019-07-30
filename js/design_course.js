/**
 * api
 * @param {Number} pageNo 当前页数
 * @param {Number} pageSize 每页显示条数
 */
function getDesignData(pageNo, pageSize){
    var totalList = [
        {
            "id": 1,
            "type": 10,
            "image": "./img/Bbitmap.png",
            "price": 523,
            "studentNum": 247,
            "title": "当想再研带米社值确局部观它山数等引太通亲",
            "author": "容产",
            "categoryName": "平员将",
            "description": "使金想放候级队志影内存队年政极文标不成信光建可后第增气这候战先满取何器"
        },
    ]
    var startIndex = (pageNo - 1) * pageSize;
    var endIndex = pageNo * pageSize;
    return {
        total: totalList.length,
        list: totalList.slice(startIndex, endIndex)
    };
}
