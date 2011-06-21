/* **************************************************************************
 * The WowDataTooltip plugin handles the display of tooltips for World of
 * Warcraft related data.
 * 
 * Copyright (C) 2011  Martin Gelder
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/gpl.html.
 * ************************************************************************** */

jQuery(document).ready(function($) {
	
	$('[data-wowdatatooltip]').each(function() {
		
		alert('jQuery Selector "[data-wowdatatooltip]" found element: ' + $(this).data('wowdatatooltip'));
		
		$(this).tooltipsy({
			content: function () {
				return 'Tooltip...';
			},
			css: {
				'padding': '10px',
				'max-width': '200px',
				'color': '#303030',
				'background-color': '#f5f5b5',
				'border': '1px solid #deca7e',
				'-moz-box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
				'-webkit-box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
				'box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
				'text-shadow': 'none'
			}
		});
		
	});
	
	
	
});