require 'pp'

class Point
  attr_accessor :longitude, :latitude

  def initialize lng, lat
    @longitude = lng
    @latitude = lat
  end

  def mongoize
    {:type=>'Point', :coordinates=>[@longitude,@latitude]}
  end

  def self.mongoize(object) 
    case object
      when Point then object.mongoize
      when Hash then 
        if object[:type] #in GeoJSON Point format
            Point.new(object[:coordinates][0], object[:coordinates][1]).mongoize
        else       #in legacy format
            Point.new(object[:lng], object[:lat]).mongoize
        end
      when nil then nil
    end
  end  

  def self.demongoize object
    case object
      when nil then nil
      when Hash then
        Point.new(object[:coordinates][0], object[:coordinates][1]) 
      when Point then object       
    end
  end

  def self.evolve object
    case object
      when nil then nil
      when Hash then object
      when Point then object.mongoize
    end
  end

end