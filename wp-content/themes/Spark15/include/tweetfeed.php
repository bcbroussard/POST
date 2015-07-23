<?php
require_once 'twitteroauth/twitteroauth.php';
class TweetFeed{
	//                                       __  _          
	//     ____  _________  ____  ___  _____/ /_(_)__  _____
	//    / __ \/ ___/ __ \/ __ \/ _ \/ ___/ __/ / _ \/ ___/
	//   / /_/ / /  / /_/ / /_/ /  __/ /  / /_/ /  __(__  ) 
	//  / .___/_/   \____/ .___/\___/_/   \__/_/\___/____/  
	// /_/              /_/                                 
	private $twitter;
	//                    __  __              __    
	//    ____ ___  ___  / /_/ /_  ____  ____/ /____
	//   / __ `__ \/ _ \/ __/ __ \/ __ \/ __  / ___/
	//  / / / / / /  __/ /_/ / / / /_/ / /_/ (__  ) 
	// /_/ /_/ /_/\___/\__/_/ /_/\____/\__,_/____/  
	                                             
	public function __construct()
	{
		$this->twitter = new TwitterOAuth(	
			'aMY4Zsnn2KYi5TZkTCr9NlMuF',
			'vxkz9T7QQWUmqnJbkf7Eg8aHvFOCdcSMVMZrfbUPdNbw7nuYx9',
			'2717095358-aRUmevpNvioRb52xkFYls0Q7ldf9cIo2PjJzsqG',
			'woklRm4IAnMK5dEkXCAlSboirK4qlUmYcYNkRVddPIbl4'
		);
	}

	public function display()
	{
		$tweet = $this->get();
		if(!$tweet) return '';

		ob_start();
		?>
		<div class="widget-tweet-footer">
			<h2>follow us</h2>
			<div class="post cf">
				<h3><a href="https://twitter.com/rights4girls">@rights4girls</a></h3>
				<p><?php echo $tweet->text; ?></p>
				<ul class="cf">
					<li><a href="https://twitter.com/intent/tweet?in_reply_to=<?php echo $tweet->id_str; ?>" class="fa icon-share"><span>share</span></a></li>
					<li><a href="https://twitter.com/intent/retweet?tweet_id=<?php echo $tweet->id_str; ?>" class="fa icon-retweet"><span>retweet</span></a></li>
					<li><a href="https://twitter.com/intent/favorite?tweet_id=<?php echo $tweet->id_str; ?>" class="fa icon-star"><span>star</span></a></li>
				</ul>
			</div>
			<a href="https://twitter.com/Rights4Girls" class="twitter-follow-button" data-show-count="false">Follow @Rights4Girls</a>
			<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
		</div>
		<?php
		
		$var = ob_get_contents();
		ob_end_clean();
		return $var;
	}

	public function get()
	{
		$query  = sprintf('https://api.twitter.com/1.1/statuses/user_timeline.json?count=%s&screen_name=%s', 1, urlencode('rights4girls'));
		$tweets = $this->twitter->get($query);
		if(is_array($tweets))
			return $tweets[0];
		return false;
	}
}