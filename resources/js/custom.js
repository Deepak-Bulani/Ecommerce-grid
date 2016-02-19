//view gallery js
			$('.gallery').click(function(){
				$('.product').removeClass('active');
				$('.product').find('.s-product-img').show();
				$('.product').find('.carousel').hide();
				$('.product figcaption').removeAttr('style');
				$this = $(this);
				$this.parent().parent().parent().addClass('active');
				if($('.product').hasClass('active'))
				{
					$('.product.active').find('.s-product-img').hide();
					$('.product.active').find('.carousel').show();
				}
				else
				{
					alert(1);
					
				}
				var hoverElemHeight = $('.product.active figcaption').height();
				
				if(($this.offset().top + 2*hoverElemHeight) > $('body').height())
				{
					$('.product.active').find('figcaption').animate({
						left: "00%", top: "-100%",
					},500).css({"top": "auto"});
				}
				else{
					$('.product.active').find('figcaption').animate({
						left: "0px", bottom: "-100%",
					},500).css({"top": "auto"});
				}
					
			})
			
			
			
//Add to cart animation

$('.cart').click(function(e){
			e.preventDefault();
				// add the picture to the cart
				var $parentElement = $(this).parent().parent().parent();
				var $element = $parentElement.find('.s-product-img');
				var $picture = $element.clone();
				
				var pictureOffsetOriginal = $element.offset();
				if(!$parentElement.hasClass('active'))
				{
				$picture.css({'position': 'absolute', 'top': pictureOffsetOriginal.top, 'left': pictureOffsetOriginal.left , width: '100px'});
				}
				else
				{
					return false;
				}

				var pictureOffset = $picture.offset();
				if ($('.cart-wrap')[0])
					{	//console.log(pictureOffset);
						var cartBlockOffset = $('.cart-wrap').offset();
					}
				else
					var cartBlockOffset = 0;

				// Check if the block cart is activated for the animation
				if (cartBlockOffset != undefined && $picture.size())
				{
					$picture.appendTo('body');
					$picture.css({ 'position': 'absolute', 'top': $picture.css('top'), 'left': $picture.css('left'), 'z-index': 4242 })
					.animate({ 'width': $element.attr('width')*0.66, 'height': $element.attr('height')*0.66, 'opacity': 0.2, 'top': cartBlockOffset.top + 30, 'left': cartBlockOffset.left + 15 }, 1000)
					.fadeOut(100, function() {
						$(this).remove();
					});
				}
				
			return false;
		});
