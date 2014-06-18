//
//  DMToDoItem.h
//  iOSDeveloperLibraryGettingStarted
//
//  Created by Srikanth Nutigattu on 18/06/14.
//  Copyright (c) 2014 Srikanth Nutigattu. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface DMToDoItem : UITableViewController

@property NSString *itemName;
@property BOOL completed;
@property (readonly) NSDate *creationDate;

@end
