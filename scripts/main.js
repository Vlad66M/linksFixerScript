document.getElementById('btn-fix-links').addEventListener('click', () => {
    fixLinks(
        document.querySelector('.my-list')
    );
});

function fixLinks(element){
    if(!element.hasChildNodes){
        return;
    }
    let nodes = element.childNodes;
    for(let node of nodes){
        if(node.tagName!=undefined && node.tagName!='A'){
            let firstCh = node.firstChild;
            firstChContent = firstCh.textContent;
            if(firstChContent.startsWith('https://')
            || firstChContent.startsWith('http://')){
                //console.log(firstCh);
                let a = document.createElement('a');
                let link = document.createTextNode(firstChContent);
                a.appendChild(link); 
                //a.title = firstChContent; 
                a.href = firstChContent;
                node.replaceChild(a, firstCh);
            }
        }
        if(node.hasChildNodes){
            fixLinks(node);
        }
    }
}