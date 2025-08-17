document.addEventListener('DOMContentLoaded', domReady);

        function domReady() {
            new Dics({
                container: document.querySelectorAll('.b-dics')[0],
                hideTexts: false,
                textPosition: "bottom"

            });
        }

        function CompareEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[0]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 3
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = './static/images/bicycle/';
                        break;
                    case 1:
                        image.src = './static/images/flowers/';
                        break;
                    case 2:
                        image.src = './static/images/garden/';
                        break;
                    case 3:
                        image.src = './static/images/stump/';
                        break;
                    case 4:
                        image.src = './static/images/treehill/';
                        break;
                    case 5:
                        image.src = './static/images/bonsai/';
                        break;
                    case 6:
                        image.src = './static/images/counter/';
                        break;
                    case 7:
                        image.src = './static/images/kitchen/';
                        break;
                    case 8:
                        image.src = './static/images/room/';
                        break;
                    case 9:
                        image.src = './static/images/playroom/';
                        break;
                    case 10:
                        image.src = './static/images/drjohnson/';
                        break;
                    case 11:
                        image.src = './static/images/train/';
                        break;
                    case 12:
                        image.src = './static/images/truck/';
                        break;
                    
                }
                switch (i) {
                    case 0:
                        image.src = image.src + '/3dgs.png';
                        break;
                    case 1:
                        image.src = image.src + '/ours.png';
                        break;
                    case 2:
                        image.src = image.src + '/gt.png';
                        break;
                }
            }

            scene_list = document.getElementById("compare-1").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
            scene_list = document.getElementById("compare-2").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i+5) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
            scene_list = document.getElementById("compare-3").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i+9) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }
  

