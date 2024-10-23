document.querySelectorAll("td[data-count]").forEach($=> {
    let t=$.getAttribute("data-count");
    if( !t)return;
    let e="0d 0h 0m 0s", o=new Date(t);
    if(o<=new Date) {
        $.textContent=e;
        return
    }
    let l=setInterval(()=> {
        let t=o-new Date;
        if(t<=0)$.textContent=e, clearInterval(l);
        else {
            let n=Math.floor(t/864e5), r=Math.floor(t%864e5/36e5), f=Math.floor(t%36e5/6e4), u=Math.floor(t%6e4/1e3);
            $.textContent=`$ {
                n
            }
            d $ {
                r
            }
            h $ {
                f
            }
            m $ {
                u
            }
            s`
        }
    }
    , 1e3)
}

);
