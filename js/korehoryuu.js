function showTOP() {
    document.body.innerHTML = `
    <div id="toppage">
        <p class="title-sentence" style="margin-top: 20vh;margin-bottom: 2vh;">SHISHIJI FES 2024</p>
        <img src="<?php echo get_template_directory_uri(); ?>/images/diverge-white.png">
        <p class="title-sentence" style="margin-top: 2vh;">9.15 / 9.16</p>
        <div id="sns-itiran" style="margin-top: 10vh;">
            <a href="https://www.instagram.com/shishijifes_official/" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/images/insw.png" alt=""></a>
            <a href="https://x.com/shishijifes" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/images/twiw.png" alt=""></a>
            <a href="https://www.youtube.com/channel/UC0el71_rzH1iLPEUCS14X0Q" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/images/youw.png" alt=""></a>
            <a href="https://www.tiktok.com/@shishijifes_official" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/images/tikw.png" alt=""></a>
        </div>
    </div>
    <footer>
        <div class="emphasized">
            <p>Top</p>
        </div>
        <div onclick="showINFO()">
            <p>Info</p>
        </div>
    </footer>
    `;
    window.scrollTo(0, 0);
}

function showINFO() {
    document.body.innerHTML = `
        <div id="info">
            <p class="headline1">Information</p>
            <p class="text">ご案内</p>
            <p class="headline2" style="margin-top: 4vh;">Date</p>
            <p class="text">開催日時</p>
            <p class="headline3">
                2024/9/15（日）<br>
                2024/9/16（月）
            </p>
            <p class="headline3">9:00 - 16:00</p>
            <p class="headline2" style="margin-top: 3vh;">Access</p>
            <p class="text">アクセス</p>
            <p class="headline3">世田谷学園 中学校 高等学校</p><br>
            <p class="text">
                〒154-0005 東京都世田谷区三宿1-16-31<br>
                &thinsp;TEL : 03-3411-8661&emsp;FAX : 03-3487-9113<br>
                ■東急田園都市線・世田谷線／三軒茶屋駅 北口Ｂ 徒歩約10分<br>
                ■小田急線・京王井の頭線／下北沢駅 徒歩約25分<br>
                ■京王井の頭線／池ノ上駅 徒歩約20分<br>
                ■バス／三宿停留所下車 徒歩約5分<br>
            </p>
            <img src="<?php echo get_template_directory_uri(); ?>/images/accessmap.jpg" id="touchable">
        </div>
        <br><br><br>
        <footer>
            <div onclick="showTOP()">
                <p>Top</p>
            </div>
            <div class="emphasized">
                <p>Info</p>
            </div>
        </footer>
    `;
    window.scrollTo(0, 0);
}
